import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, TextField, Container } from "@mui/material";
import "./NewsAggregator.css";

const RSS_FEED_URLS = [
  { name: "Krebs on Security", url: "https://krebsonsecurity.com/feed/" },
  { name: "SecurityWeek", url: "https://www.securityweek.com/rss.xml" },
  { name: "Dark Reading", url: "https://www.darkreading.com/rss.xml" },
  { name: "CISA Alerts", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/rss.xml" },
];

const parseRSSFeed = async (rssUrl) => {
  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`);
    const data = await response.json();
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");

    const items = Array.from(xml.querySelectorAll("item")).map((item) => ({
      title: item.querySelector("title")?.textContent || "No title",
      link: item.querySelector("link")?.textContent || "#",
      pubDate: item.querySelector("pubDate")?.textContent || "Unknown date",
      source: rssUrl,
    }));

    return items;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return [];
  }
};

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFeeds = async () => {
      let allArticles = [];
      for (const feed of RSS_FEED_URLS) {
        const articles = await parseRSSFeed(feed.url);
        allArticles = [...allArticles, ...articles.map((item) => ({ ...item, source: feed.name }))];
      }
      setArticles(allArticles);
    };

    fetchFeeds();
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container style={{ backgroundColor: "#121212", color: "white", minHeight: "100vh", padding: "20px" }}>
      <Typography variant="h4" style={{ marginBottom: "20px", textAlign: "center", color: "#ff9800" }}>
        Cybersecurity News Feed 
      </Typography>
      
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search for cybersecurity news..."
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ background: "white", borderRadius: "5px", marginBottom: "20px" }}
      />

      {filteredArticles.length > 0 ? (
        filteredArticles.map((article, index) => (
          <Card key={index} style={{ marginBottom: "15px", backgroundColor: "#1e1e1e", color: "white" }}>
            <CardContent>
              <Typography variant="h6">
                <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ color: "#ff9800" }}>
                  {article.title}
                </a>
              </Typography>
              <Typography variant="body2" color="gray">
                {article.source} | {new Date(article.pubDate).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No news found.</Typography>
      )}
    </Container>
  );
};

export default NewsFeed;
