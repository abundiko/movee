// import axios from "axios";

// const url =
//   "https://www.lulacloud.com/d/rmggqjVEp56-the-holdovers-2023-awafim-tv-mkv";
// const data = {
//   key: "value",
// };

// export async function GET() {
//   try {
//     // axios.post(url, data, {
//     //     headers:{
//     //         'Content-Type': "text/html"
//     //     }
//     // })
//     //   .then(response => {
//     //     console.log('Headers:', response.headers);
//     //     console.log('Data:', response.data);
//     //   })
//     //   .catch(error => {
//     //     console.error(error);
//     //   });
//     fetch(
//       "https://www.lulacloud.com/d/rmggqjVEp56-the-holdovers-2023-awafim-tv-mkv",
//       {
//         method: "POST",
//         headers: {
//         //   "Content-type": "text/html",
//           "User-Agent": "curl/8.7.1",
//           "Accept": "*/*",
//           "Content-Type": "application/x-www-form-urlencoded",
//           "Content-Length": "0",
//         },
//         body: "",
//       }
//     ).then((res) => {
//         console.log(res.status);

//       const h = res.headers;
//       console.log(h.get("location"));
//     });
//     return new Response("ok");
//   } catch (error) {
//     console.error({ error });
//   }
// }

// GET();

// var req = new XMLHttpRequest();
// req.open('POST', "https://www.lulacloud.com/d/rmggqjVEp56-the-holdovers-2023-awafim-tv-mkv", true);
// req.send(null);
// req.onload = function() {
//   var headers = req.getAllResponseHeaders().toLowerCase();
//   console.log(headers);
// };

fetch(
  "https://www.lulacloud.com/d/rmggqjVEp56-the-holdovers-2023-awafim-tv-mkv",
  {
    method: "POST",
    headers: {
      "Content-Type": "text/html",
    },
    redirect: "manual",
    body: "",
  }
).then((response) => {
  const location = response.headers.get("location");
  console.log({ location });

  for (var pair of response.headers.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
});
