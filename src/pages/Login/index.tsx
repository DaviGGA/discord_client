import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/hooks/useAuth"
import { type UserLogin } from "@/types/user"
import { MessageCircle } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router";
import { toast } from "sonner"

export function Login() {

  const { login } = useAuth();

  const [userLogin, setUserLogin] = useState<UserLogin>({
    email: "",
    password: ""
  })

  async function onLoginClick() {
    const { email, password } = userLogin;
    if(!email || !password) {
      return toast.error(
        "Invalid fields", 
        {
          description: "Please, fill all fields",
          position: "top-center"
        }
      )
    }

    try {
      const token = await login(userLogin);
      toast.success(
        "User logged in successfully",
        {
          description:"Welcome back!",
          position: "top-center"
        }
      )
      console.log("TOKEN", token)
    } catch (error) {
      toast.error(
        "Oops!",
        {
          description: "Something happened at the login.",
          position: "top-center"
        }
      )
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
            <CardTitle className="text-2xl font-bold">Welcome back!</CardTitle>
            <CardDescription className="mt-2">We're so excited to see you again!</CardDescription>
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
                type="email"
                value={userLogin.email}
                onChange={e => setUserLogin(
                {...userLogin, email: e.target.value})}
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
                value={userLogin.password}
                onChange={e => setUserLogin(
                {...userLogin, password: e.target.value})}
                required
              />
            </div>
            <Button
              onClick={onLoginClick}
              type="button"
              className="w-full bg-primary font-medium py-3 mt-5">
              Log In
            </Button>
          </form>
          <Separator className="bg-[#40444b]" />
          <div className="text-center text-sm text-[#72767d]">
            Need an account?{" "}
            <Link
              to={"/signup"} 
              className="text-[#00aff4] hover:underline">
              Create one
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}