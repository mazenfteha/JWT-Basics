# JWT-Basics
JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend).
A JWT contains three parts:
Header: Consists of two parts:
The signing algorithm that’s being used.
The type of token, which, in this case, is mostly “JWT”.
Payload: The payload contains the claims or the JSON object.
Signature: A string that is generated via a cryptographic algorithm that can be used to verify the integrity of the JSON payload.
![Screenshot (278)](https://user-images.githubusercontent.com/104158971/224973253-264a821b-43e1-4fa2-ad27-59c2558afdb8.png)

WHy we use JWT ?
beacause it has a security feature where we can be sure about integrity of our data and this data can be verified and trusted because it is digitally signed
