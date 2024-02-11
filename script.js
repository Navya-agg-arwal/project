function openChatbot() {
	const chatbotContainer = document.getElementById("chatbot");
	chatbotContainer.innerHTML = `
		<iframe src="https://your-chatbot-api.com/open-chatbot?restaurantId=123" width="100%" height="100%" frameborder="0"></iframe>
	`;
	chatbotContainer.style.display = "block";
}