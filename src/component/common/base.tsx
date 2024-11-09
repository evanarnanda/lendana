import { Html } from '@elysiajs/html'
export default function BaseHtml( { children }: { children: JSX.Element } ) {
  return (
  <html lang='en' >
      <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="/public/dist/htmx.min.js"></script>
      <script src="/public/htmx.js"></script>
      <link rel="stylesheet" href="/public/dist/output.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" />
          <title>Base HTML</title>
      </head>
      <body>
          {children}
      </body>
      <script src="/public/theme.js"></script>
  </html>
  )
} 