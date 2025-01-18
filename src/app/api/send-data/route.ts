import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const body = await request.json();
     
  
      const { firstname, phone, service, message } = body;
  
      const TELEGRAM_BOT_TOKEN = "8054220409:AAGjHid8-2pI-B93VIDT2l2hYoCX0C7vUu0";
      const CHAT_ID = "1306260720";
  
      const telegramMessage = `Wiadomość ze strony Kopię: \n- Mam na imię ${firstname}\n- mój numer kontaktowy to: ${phone}\n- Wybrano usługę: ${service || "Nie podano"}\n-${message || "-"}`;

      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: telegramMessage,
         
        }),
      });
  
      if (response.ok) {
        
        return NextResponse.json({
          success: true,
          message: "Wiadomość wysłana, oczekuj na kontakt  :)",
        });
      } else {
        console.error("Błąd podczas wysyłania wiadomości.");
        return NextResponse.json(
          {
            success: false,
            error: "Nie udało się wysłać wiadomości.",
          },
          { status: 500 }
        );
      }
    } catch (error: any) {
      console.error("Wystąpił błąd:", error.message);
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }
  }
  

// interface RequestBody{
//     firstname: string;
//     phone: string;
//     service?: string;
//     message?: string;
// };



// export  async function POST(req: NextRequest, res: NextResponse) {
    
//     if (req.method === "POST") {
        
//         const body: RequestBody = await req.json();

//         const { firstname, phone, service, message } = body;

//         const TELEGRAM_BOT_TOKEN = "8054220409:AAGjHid8-2pI-B93VIDT2l2hYoCX0C7vUu0";
//         const CHAT_ID = "1306260720";
  

//         const telegramMessage = `Nowa wiadomość z formularza:%0A- Imię: ${firstname}%0A- Telefon: ${phone}%0A- Usługa: ${service || "Nie podano"}%0A- Wiadomość: ${message || "Nie podano"}`;
//         const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;


//         try {
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     chat_id: CHAT_ID,
//                     text: telegramMessage,
//                     parse_mode: "Markdown",
//                 }),
//             });

//             if (response.ok) {
//                 return NextResponse.json({
//                   success: true,
//                   message: "Wiadomość wysłana na Telegram!",
//                 });
//               } else {
//                 return NextResponse.json(
//                   {
//                     success: false,
//                     error: "Nie udało się wysłać wiadomości.",
//                   },
//                   { status: 500 }
//                 );
//               }
//         } catch (error: any) {
//             return NextResponse.json(
//               {
//                 success: false,
//                 error: error.message,
//               },
//               { status: 500 }
//             );
//           }
//     } 
// } 


    

