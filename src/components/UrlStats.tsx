import React from 'react';

interface UrlStat {
    shortUrl: string;
    originalUrl: string;
    createdAt: string;
    expiryDate: string;
    clicks: number;
    clickDetails: {
        timestamp: string;
        source: string;
        location: string;
    }[];
}

const dummyData: UrlStat[] = [
    {
        shortUrl: 'http://localhost:3000/abc123',
        originalUrl: 'https://www.example.com',
        createdAt: '2025-07-15',
        expiryDate: '2025-07-30',
        clicks: 5,
        clickDetails: [
            { timestamp: '2025-07-15 10:00', source: 'Google', location: 'India' },
            { timestamp: '2025-07-15 11:00', source: 'Bing', location: 'USA' },
            { timestamp: '2025-07-16 14:00', source: 'Facebook', location: 'India' },
            { timestamp: '2025-07-17 12:00', source: 'Twitter', location: 'UK' },
            { timestamp: '2025-07-18 13:00', source: 'Direct', location: 'Australia' },
        ],
    },
];

const UrlStats: React.FC = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>URL Shortener Statistics</h2>
            {dummyData.map((stat, index) => (
                <div key={index} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
                    <p><strong>Original URL:</strong> {stat.originalUrl}</p>
                    <p><strong>Shortened URL:</strong> {stat.shortUrl}</p>
                    <p><strong>Created At:</strong> {stat.createdAt}</p>
                    <p><strong>Expiry Date:</strong> {stat.expiryDate}</p>
                    <p><strong>Total Clicks:</strong> {stat.clicks}</p>
                    <h4>Click Details:</h4>
                    <ul>
                        {stat.clickDetails.map((click, idx) => (
                            <li key={idx}>
                                {click.timestamp} - {click.source} - {click.location}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default UrlStats;
