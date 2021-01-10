import http from "./httpService";

const apiEndPoint = "/email";

export function sendMail(sender) {
  // console.log(sender);
  return http.post(apiEndPoint, {
    name: sender.name,
    email: sender.email,
    phone: sender.phone,
    company: sender.company,
    message: sender.message,
  });

  // return http.get(apiEndPoint);
}
