import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, User, Mail, Lock, Eye, EyeOff, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import guideImage from "@/assets/guide-2.jpg";
import mamaCompassLogo from "@/assets/mama-compass-logo-dark.svg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, we'll redirect to home after any sign up attempt
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Promotional Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-b from-pink-200 to-pink-100 p-8 xl:p-12 items-center justify-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 h-16 w-16 rounded-full bg-pink-300/30"></div>
        <div className="absolute top-16 left-16 h-12 w-12 rounded-full bg-pink-400/20"></div>
        <div className="absolute top-24 left-24 h-8 w-8 rounded-full bg-pink-500/20"></div>
        <div className="absolute bottom-8 right-8 h-20 w-20 rounded-full bg-pink-300/20"></div>
        <div className="absolute bottom-16 right-16 h-14 w-14 rounded-full bg-pink-400/15"></div>
        
        <div className="relative z-10 max-w-md text-center">
          {/* Branding */}
          <h1 className="text-2xl lg:text-3xl font-serif text-pink-800 mb-2">Mama's Compass</h1>
          <p className="text-pink-600 text-sm mb-6 lg:mb-8">Your journey, beautifully guided</p>
          
          {/* Mother and baby illustration */}
          <div className="mb-6 lg:mb-8">
            <img 
              src={guideImage} 
              alt="Mother and baby" 
              className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-2xl mx-auto shadow-lg"
            />
          </div>
          
          {/* Welcome text */}
          <h2 className="text-xl lg:text-2xl font-serif text-pink-800 mb-4">Welcome to Your Motherhood Journey</h2>
          <p className="text-pink-700 text-sm leading-relaxed">
            Join thousands of amazing moms who trust Mama's Compass for premium baby care products and nurturing guidance every step of the way.
          </p>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
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
            
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 mb-2">Create Your Account</h2>
            <p className="text-gray-600 text-sm mb-4 sm:mb-6">Start your beautiful journey with us today</p>
            
            {/* Decorative line with heart */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="flex-1 h-px bg-gray-200"></div>
              <div className="mx-4">
                <Heart className="h-4 w-4 text-pink-500 fill-pink-500" />
              </div>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <User className="h-4 w-4 text-pink-500" />
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your beautiful name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="h-12 pl-4 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail className="h-4 w-4 text-pink-500" />
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-12 pl-4 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Lock className="h-4 w-4 text-pink-500" />
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="h-12 pl-4 pr-12 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Lock className="h-4 w-4 text-pink-500" />
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="h-12 pl-4 pr-12 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox 
                id="terms" 
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                className="mt-1" 
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 cursor-pointer select-none leading-relaxed"
              >
                I agree to the{" "}
                <Link to="/terms" className="text-pink-500 font-medium hover:text-pink-600">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-pink-500 font-medium hover:text-pink-600">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white rounded-lg shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Heart className="h-4 w-4 fill-white" />
              {isLoading ? "Creating Account..." : "Create My Account"}
            </Button>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-pink-500 font-medium hover:text-pink-600">
                Sign in
              </Link>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="flex justify-center gap-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Shield className="h-4 w-4 text-green-500" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Heart className="h-4 w-4 text-pink-500 fill-pink-500" />
              <span>Trusted by 50K+ Moms</span>
            </div>
          </div>

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

export default SignUp;
