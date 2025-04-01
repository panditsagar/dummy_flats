import React, { useState, useEffect } from "react";

const Blog = () => {
    // Load blogs from localStorage or use default blogs
    const initialBlogs = JSON.parse(localStorage.getItem("blogs")) || [
        {
            id: 1,
            title: "Top Real Estate Trends in 2025",
            content: "Discover the upcoming trends in the real estate market...",
            date: "March 16, 2025",
            image: "/background.webp",
        },
        {
            id: 2,
            title: "Best Investment Locations in India",
            content: "Explore top locations like Noida, Mumbai, Ranchi...",
            date: "March 14, 2025",
            image: "/background.webp",
        },
    ];

    const [blogs, setBlogs] = useState(initialBlogs);
    const [newBlog, setNewBlog] = useState({
        title: "",
        content: "",
        image: "",
    });

    // Save blogs to localStorage whenever they are updated
    useEffect(() => {
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }, [blogs]);

    // Convert uploaded image to Base64 for localStorage storage
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewBlog({ ...newBlog, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const addBlog = () => {
        if (newBlog.title && newBlog.content) {
            const updatedBlogs = [
                {
                    id: blogs.length + 1,
                    ...newBlog,
                    date: new Date().toLocaleDateString(),
                    image: newBlog.image || "/background.webp", // Default image if none is uploaded
                },
                ...blogs,
            ];
            setBlogs(updatedBlogs);
            setNewBlog({ title: "", content: "", image: "" }); // Reset input fields
        } else {
            alert("Please fill in the title and content fields!");
        }
    };

    return (
        <section className="py-16 bg-green-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Latest Blog Posts</h2>

                {/* Add Blog Form */}
                <div className="mb-10 bg-white shadow-lg p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4">Add a New Blog</h3>
                    <input
                        type="text"
                        placeholder="Blog Title"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                        className="w-full p-2 mb-3 border rounded"
                    />
                    <textarea
                        placeholder="Blog Content"
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                        className="w-full p-2 mb-3 border rounded"
                    />

                    {/* Upload Image */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-2 mb-3 border rounded"
                    />

                    <button onClick={addBlog} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
                        Add Blog
                    </button>
                </div>

                {/* Blog Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                                <p className="text-gray-600 text-sm">{blog.date}</p>
                                <p className="text-gray-700 mt-2">{blog.content.substring(0, 100)}...</p>
                                <button className="mt-3 text-blue-600 hover:underline">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
