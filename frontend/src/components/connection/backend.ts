const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const registerUser = async () =>
  await fetch(`${API_URL}/api/v1/register`, {
    method: 'POST',
    credentials: 'include',
  });
export const loginUser = async (data: Record<string, any>) =>
  await fetch(`${API_URL}/api/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });
export const newPost = async (formData: FormData) =>
  await fetch(`${API_URL}/api/v1/posts`, {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });
export const getPosts = async () =>
  await fetch(`${API_URL}/api/v1/posts`, {
    method: 'GET',
    credentials: 'include',
  });
