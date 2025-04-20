import { useState } from 'react';

function Comments() {
    const [comments, setComments] = useState([
        {
            id: 1,
            text: 'This is amazing!',
            image: 'https://plus.unsplash.com/premium_photo-1726877140485-70692aafe655?w=500&auto=format&fit=crop&q=60', // Placeholder image
            date: '2025-04-20 10:30 AM',
            replies: ['Thank you!', 'Glad you liked it!'],
            editable: false,
        },
        {
            id: 2,
            text: 'Great work!',
            image: 'https://plus.unsplash.com/premium_photo-1676651533764-ee16dbfd2113?w=500&auto=format&fit=crop&q=60',
            date: '2025-04-19 02:15 PM',
            replies: ['Appreciate it!', 'Thanks a lot!'],
            editable: false,
        },
        {
            id: 3,
            text: 'Love this!',
            image: 'https://images.unsplash.com/photo-1667207888680-ba63af41edca?w=500&auto=format&fit=crop&q=60',
            date: '2025-04-18 08:45 AM',
            replies: ['Means a lot!', 'Thank you!'],
            editable: false,
        },
    ]);

    const handleEdit = (id: number) => {
        setComments((prev) =>
            prev.map((comment) =>
                comment.id === id ? { ...comment, editable: !comment.editable } : comment
            )
        );
    };

    const handleDelete = (id: number) => {
        setComments((prev) => prev.filter((comment) => comment.id !== id));
    };

    const handleSave = (id: number, newText: string) => {
        setComments((prev) =>
            prev.map((comment) =>
                comment.id === id ? { ...comment, text: newText, editable: false } : comment
            )
        );
    };

    return (
        <div className="max-w-lg mx-auto px-4 py-4">
            <h2 className="text-lg font-semibold mb-4">Comments</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className="flex items-start justify-between mb-4">
                        {/* Image Preview */}
                        <img
                            src={comment.image}
                            alt="Comment Preview"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div className="flex-1">
                            {/* Comment Text */}
                            {comment.editable ? (
                                <input
                                    type="text"
                                    defaultValue={comment.text}
                                    onBlur={(e) => handleSave(comment.id, e.target.value)}
                                    className="border border-gray-300 rounded px-2 py-1 w-full"
                                />
                            ) : (
                                <p className="text-sm">{comment.text}</p>
                            )}
                            {/* Date and Time */}
                            <p className="text-xs text-gray-500">{comment.date}</p>
                            {/* Replies */}
                            <ul className="mt-2 pl-4 border-l border-gray-300">
                                {comment.replies.map((reply, index) => (
                                    <li key={index} className="text-xs text-gray-600">
                                        {reply}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Actions */}
                        <div className="flex flex-col space-y-2 ml-4">
                            <button
                                onClick={() => handleEdit(comment.id)}
                                className="text-blue-500 text-xs"
                            >
                                {comment.editable ? 'Save' : 'Edit'}
                            </button>
                            <button
                                onClick={() => handleDelete(comment.id)}
                                className="text-red-500 text-xs"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;