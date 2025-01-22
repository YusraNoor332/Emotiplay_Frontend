import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaYoutube, FaSmile, FaInfinity, FaUserCircle } from "react-icons/fa";
import { MdMood, MdPlayCircleFilled, MdPersonalVideo } from "react-icons/md";
import CarouselHero from "./Components/CarouselHero";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <CarouselHero />
      {/* Header Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">
          Discover Videos That Match Your Mood
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          EmotiPlay uses mood recognition to recommend music and videos just for
          you.
        </p>
        <Link to={"/signup"}>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Started for Free
          </Button>
        </Link>
      </header>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-purple-800">
            How EmotiPlay Works
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Card className="w-full md:w-1/3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MdMood className="text-purple-600" size={24} />
                  Mood Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                We use AI to detect your mood through facial expressions.
              </CardContent>
            </Card>
            <Card className="w-full md:w-1/3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaYoutube className="text-purple-600" size={24} />
                  YouTube Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                We tap into YouTube's vast library of videos and music.
              </CardContent>
            </Card>
            <Card className="w-full md:w-1/3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MdPlayCircleFilled className="text-purple-600" size={24} />
                  Personalized Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                Get content that perfectly matches your current mood.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-purple-800">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaSmile className="text-purple-600" size={24} />
                  Mood-Based Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                Our AI-powered system analyzes your facial expressions to
                recommend the perfect content for your current mood.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaInfinity className="text-purple-600" size={24} />
                  Free and Unlimited
                </CardTitle>
              </CardHeader>
              <CardContent>
                Enjoy our service completely free of charge, with no hidden fees
                or limitations. Your mood, our treat!
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MdPersonalVideo className="text-purple-600" size={24} />
                  Personalized Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                Get a unique video experience tailored to your emotions,
                preferences, and viewing history.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-purple-800">
            How to Get Started
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <FaUserCircle className="text-purple-600" size={32} />
              </div>
              <h3 className="font-semibold mb-2">1. Sign Up</h3>
              <p>Create your free account in seconds.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <MdMood className="text-purple-600" size={32} />
              </div>
              <h3 className="font-semibold mb-2">2. Express Yourself</h3>
              <p>Allow camera access for mood detection.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <MdPlayCircleFilled className="text-purple-600" size={32} />
              </div>
              <h3 className="font-semibold mb-2">3. Enjoy</h3>
              <p>Watch videos that match your mood!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-purple-800">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex",
                comment:
                  "EmotiPlay always knows what I need to watch. It's like having a friend who really gets me!",
              },
              {
                name: "Sam",
                comment:
                  "I love how it picks up on my mood. The recommendations are spot on every time.",
              },
              {
                name: "Jordan",
                comment:
                  "This app has introduced me to so many great videos I wouldn't have found otherwise.",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Call-to-Action Section */}
      <section className="bg-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Ready to Match Your Mood?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join EmotiPlay today and discover a new way to enjoy YouTube
            content.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-purple-100"
          >
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
