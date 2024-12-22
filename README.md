# First AI Project: Using Gemini AI API and Polygon API

## **Project Overview**

This project integrates the **Gemini AI API** for natural language processing and sentiment analysis with the **Polygon API** for financial data. The goal is to analyze market sentiment and provide insights into stock market trends based on financial news and user queries.

---

## **Key Features**

1. **Sentiment Analysis**: Analyze financial news and user queries to determine the sentiment (positive, negative, or neutral) towards specific stocks or sectors.
2. **Stock Data Retrieval**: Fetch real-time stock market data, such as price, volume, and historical trends, using the Polygon API.
3. **Interactive Query System**: Allow users to input questions about stocks, sectors, or market trends and receive AI-driven insights.

---

## **Technologies Used**

### **Frontend**:

- **Svelte 5** for building a responsive and interactive user interface.

### **APIs**:

1. **Gemini AI API**:
   - Used for sentiment analysis and language understanding.
2. **Polygon API**:
   - Used to fetch financial data, including stock prices, historical trends, and market news.

---

## **How It Works**

### **1. User Interaction**:

- Users enter queries like:
  - “What is the sentiment around Tesla?”
  - “How is the technology sector performing?”

### **2. API Calls**:

- The query is processed using:
  1. **Gemini AI API** to determine sentiment and extract relevant keywords.
  2. **Polygon API** to retrieve real-time data about the mentioned stocks or sectors.

### **3. Data Correlation**:

- The app combines sentiment data with real-time stock data to generate insights.

### **4. Response to User**:

- The interface displays insights such as:
  - Overall sentiment: Positive
  - Stock trends: Tesla is up 2.3% today.
  - Relevant tags: Electric Vehicles, Innovation

---

## **Example Use Case**

### **Input Query**:

"What’s the market sentiment around Apple after the latest iPhone launch?"

### **Processing**:

1. **Gemini AI API**:
   - Sentiment: Positive
   - Keywords: Apple, iPhone launch
2. **Polygon API**:
   - Current Stock Price: $175
   - Change: +3%
   - Volume: High

### **Output**:

- Sentiment: Positive
- Stock Movement: Apple stock is up 3% following the iPhone launch.
- Tags: Innovation, iPhone, Technology

---

## **Challenges Faced**

1. **API Rate Limits**:
   - Managed by limiting redundant API calls.
2. **Data Correlation**:
   - Merging sentiment analysis results with real-time data.
3. **Error Handling**:
   - Ensured the app gracefully handles API failures and missing data.

---

## **Future Improvements**

1. **Broader Sentiment Analysis**:
   - Expand sentiment analysis to include social media feeds (e.g., Twitter).
2. **User Dashboard**:
   - Add a dashboard for users to track favorite stocks and sectors.

---

## **Conclusion**

This project was a hands-on introduction to combining AI and financial data. It demonstrated the power of integrating natural language processing with real-time APIs to deliver actionable insights. The project lays the foundation for more advanced applications in financial technology and AI-driven analytics.

