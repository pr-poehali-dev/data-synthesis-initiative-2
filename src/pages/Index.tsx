export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ЗЁМА</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Доставка</a>
          <a href="#">Контакты</a>
        </nav>
        <a href="tel:+79180741469" className="btn-cta" style={{ textDecoration: "none" }}>Заказать</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span style={{ color: "#3ecf1a" }}>ЖИВАЯ ЗЕЛЕНЬ</span>
              <br />
              ПРЯМО <span style={{ color: "#3ecf1a" }}>К СТОЛУ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Микрозелень от Зёмы — выращиваем сами, срезаем свежей. Горох, редис, руккола — заказывай онлайн или находи нас на рынке.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="tel:+79180741469" className="btn-cta" style={{ background: "var(--primary)", color: "white", textDecoration: "none" }}>
                Заказать по телефону
              </a>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              СВЕЖАК
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #МИКРОЗЕЛЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              С ЛЮБОВЬЮ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ЗЁМА * МИКРОЗЕЛЕНЬ ДОМА * ГОРОХ * РЕДИС * РУККОЛА * СРЕЗАЕМ СВЕЖЕЙ * БЕЗ ХИМИИ * ДОСТАВКА И РЫНОК *
            ЗЁМА * МИКРОЗЕЛЕНЬ ДОМА * ГОРОХ * РЕДИС * РУККОЛА * СРЕЗАЕМ СВЕЖЕЙ * БЕЗ ХИМИИ * ДОСТАВКА И РЫНОК
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАША ЗЕЛЕНЬ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Микрозелень горох"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Горох</h3>
                  <span className="price">150 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Нежная и сочная микрозелень гороха. Сладковатый вкус, богата витаминами и белком.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Свежее
              </span>
              <img
                src="https://images.unsplash.com/photo-1609501676725-7186f017a4b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Микрозелень редис"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Редис</h3>
                  <span className="price">150 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Острая и яркая микрозелень редиса. Добавит характер любому блюду или салату.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Микрозелень руккола"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Руккола</h3>
                  <span className="price">150 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Пикантная микрозелень рукколы с ореховым послевкусием. Идеальна в пасте, пицце и бутербродах.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">РАСТЁТ ДОМА. ЕДЕТ К ТЕБЕ.</h2>
            <p className="vibe-text">
              Никаких теплиц и посредников — выращиваю микрозелень дома, с заботой о каждом лотке. Срезаю свежей и отправляю напрямую к тебе. Ты получаешь живую зелень, а не то, что неделю пролежало на складе.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            МЫ В ИНСТАГРАМ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ЗЁМА</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Зёма — еда как у своих. Онлайн-заказ и на рынке. Без полуфабрикатов, только свежее.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Доставка
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Как заказать</h4>
          <ul>
            <li><a href="tel:+79180741469" style={{ color: "inherit", textDecoration: "none", fontWeight: 800 }}>+7 918 074-14-69</a></li>
            <li>Рынок Пт-Вс: 08:00 - 15:00</li>
            <li>Доставка: от 1 часа</li>
            <li>Самовывоз: бесплатно</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2026 ЗЁМА</span>
          <span>ЕДА С ДУШОЙ</span>
          <span>VK / TG / IG</span>
        </div>
      </footer>
    </>
  );
}