# My Arbitrage Bot

**Disclaimer**: This was the initial prototype. The beta-friendly version is a private WIP.

### How it works:

The React frontend retrieves the list of arbitrage opportunities from the Java backend.
The user can opt-in to accept the bot decisions or manually respond to the trade opportunities.
If the user opts in, the bot will automatically initiate the trade if the opportunity still exists.
If the user manually responds, the bot will initiate the trade only if the user's response matches the trade opportunity.
The Java backend initiates the trade and returns a success message to the React frontend.

## Future Work
- Implement the actual logic for retrieving arbitrage opportunities and initiating trades. 
- Modify the React frontend to display the trades in a user-friendly format.
- Consider no/low-code alternatives to make the website component updates easier to manage.
- Consider contracting part of this work out to a design studio. 
- Integrate an observability pipeline and perform benchmarking against large-scale real-time data.
- Make the system fault-tolerant.
- Have an outside audit and make sure to consult a legal team to understand regulations.
