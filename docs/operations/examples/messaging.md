---
title: "Messaging"
kind: "section"
html_id: "examples-messaging"
source: "https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#examples-messaging"
generated_by: "scripts/convert.mjs"
---


# Messaging

Upwork Messages enables professional communication through chat, video, file sharing, and notes within project-specific rooms. It gives you a place to discuss projects, interview, share documents, and keep the conversation going — to build strong, professional relationships through great communication.

This is a sample flow for listing rooms and messaging in a room using the GraphQL API.

**Workflow: Sample Messaging Flow**
1. **List Rooms** — call [`roomList`](../../queries/roomList.md) (query): Fetch available messaging rooms for the authenticated user.
2. **Open Room** — call [`room`](../../queries/room.md) (query): Select or create a room to start a conversation thread.
3. **Send Message** — call [`createRoomStoryV2`](../../mutations/createRoomStoryV2.md) (mutation): Post a new message to the selected room using a mutation.
4. **Read Messages** — call [`roomStories`](../../queries/roomStories.md) (query): Query message history for the room and display the latest updates.

---

🔗 **Source:** <a href="https://www.upwork.com/developer/documentation/graphql/api/docs/index.html#examples-messaging" target="_blank" rel="noopener noreferrer">open the original section in the official Upwork docs</a>

⬅️ **Prev:** [proposals](proposals.md)   ·   [📚 Docs index](../../README.md)   ·   **Next:** [offers-and-contracts](offers-and-contracts.md) ➡️
