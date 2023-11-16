# next-auth-google-provider-sample
next-auth-google-provider-sample




signIn redirects to http://localhost:3000/api/auth/error in development immediately.

problem was chrome was chaching my localhost login page and imediately redirecting to error, i disabled chache from devtools and it resolved.