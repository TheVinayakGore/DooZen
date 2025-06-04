import React from 'react';

const About = () => {
  return (
    <div className="py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About DooZen</h1>
        <p className="text-muted">Your Ultimate ToDo List Manager</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <p className="lead">
            <strong>DooZen</strong> is a sleek, responsive, and easy-to-use ToDo web app that helps you stay organized and productive throughout your day. Whether you’re managing tasks for work, school, or personal life — DooZen provides a simple yet effective way to manage your tasks with clarity.
          </p>

          <h4 className="mt-5 fw-semibold">✨ Key Features:</h4>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">✅ Add and view tasks with title and description</li>
            <li className="list-group-item">🎯 Mark tasks as done with a single click</li>
            <li className="list-group-item">🗑️ Delete tasks individually or clear all at once</li>
            <li className="list-group-item">📱 Fully responsive and mobile-friendly UI</li>
            <li className="list-group-item">⚡ Built with React and Bootstrap for performance & style</li>
          </ul>

          <h4 className="mt-5 fw-semibold">🚀 Why use DooZen?</h4>
          <p>
            DooZen is crafted for simplicity and speed. Unlike bloated task managers, it focuses only on what matters — capturing your tasks and helping you finish them. Whether you're a student, a developer, or anyone in between, DooZen keeps your life a little more zen.
          </p>

          <h4 className="mt-5 fw-semibold">🛠 Tech Stack</h4>
          <p>
            This app is built using modern web technologies including:
          </p>
          <ul>
            <li>⚛️ React.js – Component-based UI</li>
            <li>🎨 Bootstrap – For responsive design and layout</li>
            <li>🧠 Local State – No backend needed</li>
          </ul>

          <p className="mt-4">
            We're constantly working to improve DooZen. New features like task prioritization, categories, and reminders are coming soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
