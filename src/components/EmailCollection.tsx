"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Supabase Client Setup
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function EmailCollection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  console.log(email)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!email) {
      setMessage("Please enter an email.");
      setLoading(false);
      return;
    }

    // Insert into Supabase
    const { error } = await supabase
      .from("emails")
      .insert([{ email:email }]);

    if (error) {
      setMessage("❌ Error saving email.");
    } else {
      setMessage("Email saved successfully!");
      setEmail(""); // Clear input after submission
    }

    setLoading(false);
  };

  return (
    <div className="flex border flex-col items-center bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto font-quicksand">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Stay Updated 🚀
      </h2>
      <p className="text-gray-600 text-sm mb-4 font-semibold">
        Subscribe to get the latest updates straight to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="w-full flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1 p-2 border rounded-lg text-black-background-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-300" disabled={loading}>
          {loading ? "Submitting..." : "Subscribe"}
        </Button>
      </form>
      {message && <p className="text-sm mt-3 text-gray-700">{message}</p>}
    </div>
  );
}