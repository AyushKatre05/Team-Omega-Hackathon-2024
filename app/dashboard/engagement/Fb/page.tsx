"use client";
import React, { useEffect, useState } from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, Filler);

const EngagementAnalysis = () => {
  const [postId, setPostId] = useState<string>(''); // Initialize postId as empty string
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch data based on the dynamic post ID
  const fetchData = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://engagement-analysis-backend.onrender.com/post/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postId) {
      fetchData(postId); // Fetch data with the provided post ID
    }
  };

  // Prepare chart data only when the data is fetched successfully
  const ageData = data ? {
    labels: ['18-24', '25-34', '35-44', '45-54', '55-64'],
    datasets: [
      {
        label: 'Age Distribution',
        data: [
          data.age_18_24,
          data.age_25_34,
          data.age_35_44,
          data.age_45_54,
          data.age_55_64,
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 205, 86, 0.6)',
        ],
      },
    ],
  } : { labels: [], datasets: [] }; // Provide a default value

  const genderData = data ? {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [data.male_percentage, data.female_percentage],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  } : { labels: [], datasets: [] }; // Provide a default value

  const countryData = data ? {
    labels: ['Canada', 'Germany', 'India', 'Others', 'UK', 'USA'],
    datasets: [
      {
        data: [
          data.Canada_percentage,
          data.Germany_percentage,
          data.India_percentage,
          data.Others_percentage,
          data.UK_percentage,
          data.USA_percentage,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  } : { labels: [], datasets: [] }; // Provide a default value

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-300 p-5">
      <h1 className="text-4xl text-white font-bold mb-5 drop-shadow-lg">Engagement Analysis</h1>

      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="text"
          value={postId}
          onChange={(e) => setPostId(e.target.value)} // Update postId state on input change
          placeholder="Enter Post ID (e.g., Post003)"
          className="p-2 rounded border text-black border-gray-300"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Fetch Data
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">Age Distribution</h2>
            <Bar data={ageData} />
          </div>

          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">Gender Distribution</h2>
            <Doughnut data={genderData} />
          </div>

          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-3">Country Distribution</h2>
            <Pie data={countryData} />
          </div>

          <div className="bg-white p-5 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-3">Post Details</h2>
            <ul className="list-disc list-inside">
              <li><strong>Post ID:</strong> {data.post_id}</li>
              <li><strong>Post URL:</strong> <a href={data.post_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">{data.post_url}</a></li>
              <li><strong>Caption:</strong> {data.caption}</li>
              <li><strong>Likes:</strong> {data.likes_count} ({data.likes_percentage}%)</li>
              <li><strong>Comments:</strong> {data.comments_count} ({data.comments_percentage}%)</li>
              <li><strong>Shares:</strong> {data.shares_count} ({data.shares_percentage}%)</li>
              <li><strong>Saves:</strong> {data.saves_count} ({data.saves_percentage}%)</li>
              <li><strong>Impressions:</strong> {data.impressions}</li>
              <li><strong>Reach:</strong> {data.reach}</li>
              <li><strong>Engagement Rate:</strong> {data.engagement_rate}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default EngagementAnalysis;
