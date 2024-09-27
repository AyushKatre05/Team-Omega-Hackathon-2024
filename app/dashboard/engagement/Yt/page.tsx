"use client";
import React, { useEffect, useState } from 'react';

const YouTubeStats = () => {
  const [url, setUrl] = useState<string>('');
  const [stats, setStats] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const API_KEY = 'AIzaSyBX_PM7uoaFSk01VeOujKAVlWiiWMZ82hE'; // Replace with your API key

  const extractVideoId = (url: string): string | null => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const fetchVideoStatistics = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setStats(data.items[0].statistics);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const videoId = extractVideoId(url);
    if (videoId) {
      fetchVideoStatistics(videoId);
    } else {
      setError("Invalid YouTube URL. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-300 p-5">
      <h1 className="text-4xl text-white font-bold mb-5 drop-shadow-lg">YouTube Video Statistics</h1>

      <form onSubmit={handleSubmit} className="flex mb-5 w-full max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-grow border border-gray-300 rounded-l-md p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <button type="submit" className="bg-blue-600 text-white rounded-r-md px-4 hover:bg-blue-700 transition duration-200">
          Fetch Stats
        </button>
      </form>

      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-300">{error}</p>}
      {stats && (
        <div className="bg-white p-5 text-black rounded-lg shadow-lg w-full max-w-md mt-5">
          <h2 className="text-2xl font-semibold mb-3">Statistics:</h2>
          <ul className="list-disc list-inside">
            <li>View Count: <span className="font-bold">{stats.viewCount}</span></li>
            <li>Like Count: <span className="font-bold">{stats.likeCount}</span></li>
            <li>Dislike Count: <span className="font-bold">{stats.dislikeCount}</span></li>
            <li>Comment Count: <span className="font-bold">{stats.commentCount}</span></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default YouTubeStats;
