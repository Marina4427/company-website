
import React, { useState, useRef, useEffect } from "react";
import Icon from "../../icon/icon";
import "./style.css";

const SectionVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Состояние воспроизведения
  const playerRef = useRef(null); // Ссылка на YouTube-плеер

  // Загрузка YouTube IFrame API
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    // Глобальная функция, которую вызывает YouTube API
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("videoFrame");
    };
  }, []);

  // Обработчик клика на кнопку
  const handlePlayButtonClick = () => {
    if (playerRef.current) {
      const playerState = playerRef.current.getPlayerState(); // Получаем состояние плеера

      if (playerState === window.YT.PlayerState.PLAYING) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } else {
      console.error("Плеер не инициализирован!");
    }
  };

  return (
    <section className="tutorial">
      <div className="container">
        <iframe
          id="videoFrame"
          width="400"
          height="500"
          src="https://www.youtube.com/embed/wp43OdtAAkM?enablejsapi=1&si=8dQ7KJmW5zh3tOVD"
          title="video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div>
          <h3 className="tutorial__title title-2">
            Headline of Modern and Digital Lending Platform In a Few Seconds for You
          </h3>
          <p className="tutorial__text">
            Nowadays, it isn’t uncommon to see lenders rapidly adopting a
            digital lending strategy to streamline the lending process
            Gorgeous, high-quality design system for mobile, tablet & a few
            reasons digital
          </p>
          <div className="button__block" onClick={handlePlayButtonClick}>
            <div>
                <Icon width="48" height="48" name={isPlaying ? "pause" : "play"}></Icon>
            </div>
            {isPlaying ? "Pause Tutorial" : "Play Tutorial"} {/* текст кнопки */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionVideo;