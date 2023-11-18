# next-auth-google-provider-sample
next-auth-google-provider-sample

Ordem das chamadas de callbacks no router.js:

1. Authorize  
2. JWT callback
3. Session Callback

 export interface UserFromAuthProvider {
    email: string;
    name: string;
    image: string;
    provider: string;
    type: string;
    accessToken: string;
    tokenType: string;
    idToken: string;
    providerAccountId: string;
}


signIn redirects to http://localhost:3000/api/auth/error in development immediately.

problem was chrome was chaching my localhost login page and imediately redirecting to error, i disabled chache from devtools and it resolved.


     console.log("jwt: ", {token,user,account} );
jwt:  {
  token: {
    name: 'Cássio Seffrin',
    email: 'cassioseffrin@gmail.com',
    picture: 'https://lh3.googleusercontent.com/a/ACg8ocKkAtPWoHZWynsglnE-31BK3RnrMZ0-e8Zrg4d_waZMnX0=s96-c',
    sub: '107285841799517527299'
  },
  user: {
    id: '107285841799517527299',
    name: 'Cássio Seffrin',
    email: 'cassioseffrin@gmail.com',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocKkAtPWoHZWynsglnE-31BK3RnrMZ0-e8Zrg4d_waZMnX0=s96-c'
  },
  account: {
    provider: 'google',
    type: 'oauth',
    providerAccountId: '107285841799517527299',
    access_token: 'ya29.a0AfB_byBhaxK-3Id0TH6xTOSsNm5Z5tzoGBfWb6rgwFLc9h1xIbjRQH_Cnpeh7bHJTKZG5XsBCF9X06yGt4YRC5j6gsQkcVb3dRkUhOWDdY8073JkYhMyANMPA1sQVFWudslsZFfYX7RduV9rc-IhdOKQuQCd73DXwgbOaCgYKAUUSARASFQHGX2Mi7Ne03I-wBsjoCLhMvX762Q0171',
    expires_at: 1700264053,
    scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid',
    token_type: 'Bearer',
    id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjViMzcwNjk2MGUzZTYwMDI0YTI2NTVlNzhjZmE2M2Y4N2M5N2QzMDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMTk3OTYwNzM2NTctNDJwN2owdWZ1ZTZ0NW1jNDAwZmExa3FscnVqczgzYWsuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzMTk3OTYwNzM2NTctNDJwN2owdWZ1ZTZ0NW1jNDAwZmExa3FscnVqczgzYWsuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDcyODU4NDE3OTk1MTc1MjcyOTkiLCJlbWFpbCI6ImNhc3Npb3NlZmZyaW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJVQmF4cDJyMW5jdlMyVzkyelJZZkpRIiwibmFtZSI6IkPDoXNzaW8gU2VmZnJpbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLa0F0UFdvSFpXeW5zZ2xuRS0zMUJLM1Juck1aMC1lOFpyZzRkX3dhWk1uWDA9czk2LWMiLCJnaXZlbl9uYW1lIjoiQ8Ohc3NpbyIsImZhbWlseV9uYW1lIjoiU2VmZnJpbiIsImxvY2FsZSI6InB0LUJSIiwiaWF0IjoxNzAwMjYwNDU0LCJleHAiOjE3MDAyNjQwNTR9.ELxkc-vleMzadlGACNLWV7JUizA6qHSeUvEcP89rhtIKmzfxwQ9KSnpqkoIzNxKcv0yBIznAGZCp3XOdLwuSvWFHYWypw1UVTcnWaAqjJvm3dOHVFZuQHQ1JxDCiTjkJfVjg77Pt3ZVs6_eP1szYxD7AKkGCxm2N8JdRe2X4UQyNHsZ0DOsUDeBrkNJJCYWl7srrUt-tqYxI3GKmM9H5ZdbSKvHJE5S2LYj-YkzbaxQsjgRbfGY1GPT45_bEX9VFbbF-tUuKiTz2apE52vYVjmNjHEJKxe-hStMskcgsYrHYQf1MRfxTL6mrE5CNiKgtj6IPkZ9-LraITcXqcir3VA'
  }
}





