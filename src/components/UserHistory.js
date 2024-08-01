import React, { useState, useEffect } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import './UserHistory.css'; // Import the CSS file

const UserHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // Static dummy data for demonstration
        const dummyData = [
            {
                id: 1,
                title: 'J. perfume',
                date: '2024-01-15',
                details: 'Viewed Product 1'
            },
            {
                id: 2,
                title: 'Sapphire shirt',
                date: '2024-02-22',
                details: 'Viewed Product 2'
            },
            {
                id: 3,
                title: 'Product 3',
                date: '2024-03-10',
                details: 'Viewed Product 3'
            },
            {
                id: 4,
                title: 'Product 4',
                date: '2024-04-05',
                details: 'Viewed Product 4'
            },
            {
                id: 5,
                title: 'Product 5',
                date: '2024-05-18',
                details: 'Viewed Product 5'
            }
        ];
        setHistory(dummyData);
    }, []);

    return (
        <Container className="container">
            <h2>Your History</h2>
            <ListGroup>
                {history.map(item => (
                    <ListGroupItem key={item.id} className="list-group-item">
                        <div><strong>{item.title}</strong></div>
                        <div>Date: {item.date}</div>
                        <div>Details: {item.details}</div>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Container>
    );
};

export default UserHistory;
