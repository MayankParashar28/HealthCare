import React from 'react';
import { Users, Heart, Shield } from 'lucide-react';

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About HealthAI</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-8">
          HealthAI is a cutting-edge healthcare platform that combines artificial intelligence
          with medical expertise to provide accessible, reliable healthcare solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p>Led by healthcare professionals and AI specialists</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <Heart className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Patient-Centered</h3>
            <p>Focused on delivering personalized healthcare solutions</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <Shield className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p>Your health data is protected with enterprise-grade security</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-8">
          To make quality healthcare accessible to everyone through innovative technology
          and artificial intelligence, while maintaining the highest standards of medical care
          and patient privacy.
        </p>
      </div>
    </div>
  );
}

export default About;