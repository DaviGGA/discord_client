import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/hooks/useAuth"
import { type UserRegister } from "@/types/user"
import { MessageCircle } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router";
import { toast } from "sonner"

export function Register() {
  const { signup } = useAuth();
  const navigate = useNavigate()
  const [userRegister, setUserRegister] = useState<UserRegister>({
    email: "",
    password: "",
    confirmPassword: ""
  })
  
  async function onSignupClick() {
    const { password, confirmPassword } = userRegister;
    const passwordMismatch = password !== confirmPassword;

    if (passwordMismatch) {
      return toast.error(
        "Password Error", { 
          description: "The passwords does not match.",
          position: "top-center",
        }
      )
    }
    
    try {
      await signup(userRegister);
      toast.success(
        "Account successfully created.", {
          description: "Welcome to the platform!"
        }
      )
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl border-[#40444b]">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                <CardDescription className="mt-2">
                  Join the conversation! Connect with friends and 
                  explore communities that matter to you.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wide">
                    Email<span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    value={userRegister.email}
                    onChange={e => setUserRegister(
                    {...userRegister, email: e.target.value})}
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wide">
                    Password <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={userRegister.password}
                    onChange={e => setUserRegister(
                    {...userRegister, password: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-xs font-bold uppercase tracking-wide">
                    Confirm Password <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={userRegister.confirmPassword}
                    onChange={e => setUserRegister(
                    {...userRegister, confirmPassword: e.target.value})}
                    required
                  />
                </div>
                <Button
                  type="button"
                  className="w-full bg-primary font-medium py-3 mt-5"
                  onClick={onSignupClick}>
                  Create Account
                </Button>
              </form>
              <Separator className="bg-[#40444b]" />
              <div className="text-center text-sm text-[#72767d]">
                Alrealdy have a account?{" "}
                <Link
                  to={"/login"} 
                  className="text-[#00aff4] hover:underline">
                  Login
                </Link>
              </div>
            </CardContent>
          </Card>
    </div>
  )
}