import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { MessageCircle } from "lucide-react"

export function Register() {

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
                <CardDescription className="mt-2">Join the conversation! Connect with friends and explore communities that matter to you.</CardDescription>
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
                    required
                  />
                </div>
                <Button className="w-full bg-primary font-medium py-3 mt-5">Create Account</Button>
              </form>
              <Separator className="bg-[#40444b]" />
              <div className="text-center text-sm text-[#72767d]">
                Alrealdy have a account?{" "}
                <a href="#" className="text-[#00aff4] hover:underline">
                  Login
                </a>
              </div>
            </CardContent>
          </Card>
    </div>
  )
}