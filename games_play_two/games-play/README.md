## Making Authroized Requests

- We need to set the token to the "X:Authorization" header.

The token is in our auth state

We can pass the token directly to our service. For all authorized actions
we need to take the token and then pass it. Which is not the best solution.

Better version

We can create a custom hook - useSevice.

The hook just connects the component and the service.

We create a service factory in our game service component.
