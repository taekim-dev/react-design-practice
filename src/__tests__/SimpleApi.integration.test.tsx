import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimpleApi from '../pages/SimpleApi';

// Mock the fetch function
global.fetch = jest.fn();

describe('SimpleApi Integration Test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('completes the full user flow successfully', async () => {
    // Mock successful API response
    const mockPost = {
      id: 1,
      title: 'Test Post',
      body: 'This is a test post body'
    };
    
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPost)
    });

    render(<SimpleApi />);

    // 1. Initial state check
    expect(screen.getByText('Simple API Demo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter post ID (1-100)')).toBeInTheDocument();
    expect(screen.getByText('Fetch Post')).toBeInTheDocument();

    // 2. Try to fetch without entering ID
    fireEvent.click(screen.getByText('Fetch Post'));
    expect(await screen.findByText('Please enter a post ID')).toBeInTheDocument();

    // 3. Enter valid ID and fetch
    fireEvent.change(screen.getByPlaceholderText('Enter post ID (1-100)'), {
      target: { value: '1' }
    });
    fireEvent.click(screen.getByText('Fetch Post'));

    // 4. Check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // 5. Wait for and verify post data
    await waitFor(() => {
      expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    });
    expect(screen.getByText(mockPost.body)).toBeInTheDocument();

    // 6. Verify API was called with correct URL
    expect(global.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
  });

  it('handles error flow correctly', async () => {
    // Mock failed API response
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404
    });

    render(<SimpleApi />);

    // 1. Enter invalid ID and fetch
    fireEvent.change(screen.getByPlaceholderText('Enter post ID (1-100)'), {
      target: { value: '999' }
    });
    fireEvent.click(screen.getByText('Fetch Post'));

    // 2. Check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // 3. Wait for and verify error message
    await waitFor(() => {
      expect(screen.getByText('Post not found')).toBeInTheDocument();
    });

    // 4. Verify API was called with correct URL
    expect(global.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/999'
    );
  });
}); 