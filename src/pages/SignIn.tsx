import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import guideImage from "@/assets/guide-1.jpg";
import mamaCompassLogo from "@/assets/mama-compass-logo-dark.svg";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, we'll redirect to home after any sign in attempt
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Promotional Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-b from-pink-200 to-pink-100 p-8 xl:p-12 items-center justify-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-8 left-8 h-16 w-16 rounded-full bg-pink-300/30"></div>
        <div className="absolute top-16 left-16 h-12 w-12 rounded-full bg-pink-400/20"></div>
        
        <div className="relative z-10 max-w-md text-center">
          {/* Mother and baby illustration */}
          <div className="mb-8">
            <img 
              src={guideImage} 
              alt="Mother and baby" 
              className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-2xl mx-auto shadow-lg"
            />
          </div>
          
          {/* Welcome text */}
          <h1 className="text-2xl lg:text-3xl font-serif text-gray-800 mb-4">Welcome Back, Beautiful Mama</h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Your journey of love, care, and motherhood continues here. We're here to support you every step of the way.
          </p>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-white">
        <div className="w-full max-w-md space-y-6 sm:space-y-8">
          {/* Logo and Brand */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center">
                <img 
                  src={mamaCompassLogo} 
                  alt="Mama's Compass Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-left">
                <h1 className="text-lg sm:text-xl font-bold text-gray-800">Mama's Compass</h1>
                <p className="text-xs sm:text-sm text-gray-600">Your trusted guide through motherhood</p>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Sign In</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 pl-4 pr-12 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 pl-4 pr-12 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-sm text-pink-500 hover:text-pink-600 font-medium">
                Forgot Password?
              </Link>
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white rounded-lg shadow-lg disabled:opacity-50"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>

            <div className="text-center text-sm text-gray-600">
              New to Mama's Compass?{" "}
              <Link to="/signup" className="text-pink-500 font-medium hover:text-pink-600">
                Create Account
              </Link>
            </div>
          </form>

          {/* Back to Home */}
          <div className="text-center">
            <Link to="/home" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
