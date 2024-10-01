"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Navbar from "./Navbar";

export default function DeleteAccount() {
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleGetOtp = () => {
    if (phone && userType) {
      // In a real application, you would send an OTP to the phone number here
      console.log("Sending OTP to", phone);
      setIsOtpSent(true);
    }
  };

  const handleDelete = () => {
    if (otp) {
      // In a real application, you would verify the OTP and delete the account here
      console.log("Deleting account for", phone, "with OTP", otp);
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Delete Account
            </CardTitle>
            <CardDescription className="text-center">
              We're sorry to see you go. Please confirm your account deletion.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isOtpSent}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="userType">User Type</Label>
              <Select onValueChange={setUserType} disabled={isOtpSent} required>
                <SelectTrigger id="userType">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consumer">Consumer</SelectItem>
                  <SelectItem value="farmer">Farmer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {!isOtpSent && (
              <Button
                onClick={handleGetOtp}
                className="w-full"
                disabled={!phone || !userType}
              >
                Get OTP
              </Button>
            )}
            {isOtpSent && (
              <div className="space-y-2">
                <Label htmlFor="otp">OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter the OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {isOtpSent && (
              <Button
                onClick={handleDelete}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                disabled={!otp}
              >
                Delete My Account
              </Button>
            )}
            <div className="text-sm text-gray-500 text-center space-y-2">
              <div className="flex items-center justify-center text-amber-600">
                <AlertTriangle className="w-4 h-4 mr-1" />
                <span>This action cannot be undone.</span>
              </div>
              <Link
                href="/account"
                className="flex items-center justify-center text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Back to Account Settings</span>
              </Link>
            </div>
          </CardFooter>
        </Card>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px] bg-white text-gray-900">
            <DialogHeader>
              <DialogTitle>Account Deleted</DialogTitle>
              <DialogDescription>
                Your account has been successfully deleted. We're sorry to see
                you go.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
