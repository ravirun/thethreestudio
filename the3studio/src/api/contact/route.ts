// import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!, // server-only
//   { auth: { persistSession: false } }
// );

// export async function POST(req: Request) {
//   try {
//     const { fname, lname, phone, email, message } = await req.json();

//     // minimal validation
//     if (![fname, lname, phone, email, message].every(Boolean)) {
//       return NextResponse.json({ error: "missing" }, { status: 400 });
//     }

//     // metadata
//     const ip =
//       req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
//       req.headers.get("x-real-ip") ??
//       null;
//     const ua = req.headers.get("user-agent") ?? null;

//     const { data, error } = await supabase
//       .from("contact_messages")
//       .insert({
//         fname,
//         lname,
//         phone,
//         email,
//         message,
//         ip,
//         ua,
//       })
//       .select("id")
//       .single();

//     if (error) throw error;

//     return NextResponse.json({ ok: true, id: data.id });
//   } catch (err) {
//     console.error("API /contact error:", err);
//     return NextResponse.json({ error: "server" }, { status: 500 });
//   }
// }
