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
import { AlertTriangle, ArrowLeft, X } from "lucide-react";
import Link from "next/link";
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleDeleteRequest = (event) => {
    event.preventDefault();
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // Handle final account deletion logic here
    console.log("Account deletion confirmed");
    console.log("Reason:", reason);
    console.log("Confirmed Email:", confirmEmail);
    console.log("Confirmed Password:", confirmPassword);
    setIsDialogOpen(false);
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
              We&apos;re sorry to see you go. Please confirm your account
              deletion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleDeleteRequest}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone-number">Phone Number</Label>
                  <Input
                    id="phone-number"
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              onClick={handleDeleteRequest}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              Delete My Account
            </Button>
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

        {/* Dialog start from here */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px] bg-white text-gray-900">
            <DialogHeader>
              <DialogTitle>Confirm Account Deletion</DialogTitle>
              <DialogDescription>
                Please provide the following information to confirm your account
                deletion.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="otp" className="text-right">
                  OTP
                </Label>
                <Input
                  id="otp"
                  className="col-span-3"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="confirm-email" className="text-right">
                  Email
                </Label>
                <Input
                  id="confirm-email"
                  type="email"
                  className="col-span-3"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  placeholder="Confirm your email"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="confirm-password" className="text-right">
                  Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  className="col-span-3"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={handleConfirmDelete}
              >
                Confirm Deletion
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
