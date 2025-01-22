import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AppLayout } from "./layouts";
import {
  LandingPage,
  Signup,
  VerifyEmail,
  Login,
  Feedback,
  Home,
  MoodAnalysisResults,
  MoodBasedVideoFeed,
  MoodDetection,
  Onboarding,
  Settings,
  UserProfile,
  VideoPlayer,
  About,
  Features,
  Testimonials,
  Privacy,
  Terms,
  Contact,
  UserDashboard,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verifyEmail" element={<VerifyEmail />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/home" element={<Home />} />
      <Route path="/analysis-results" element={<MoodAnalysisResults />} />
      <Route path="/video-feed" element={<MoodBasedVideoFeed />} />
      <Route path="/detect" element={<MoodDetection />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/video" element={<VideoPlayer />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
