import { ReactComponent as FacebookIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/facebook.svg"
import { ReactComponent as InstagramIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/instagram.svg"
import { ReactComponent as WhatsappIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/whatsapp.svg"
import { ReactComponent as LogoIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/logo.svg";

function FooterContent({title, links}) {
  return (
    <section className="footer-section">
      <h2 className="section-title"> {title} </h2>
      <div className="section-content">
        {links.map(link => (
          <a className="page-link" href="/some/valid/uri" key={link}>{link}</a>
        ))}
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <LogoIcon className="icon-logo"/>
        </div>
        <FooterContent title={'客戶服務'} links={['運送說明', '退換貨相關', '付款資訊', 'FAQ']}/>
        <FooterContent title={'關於我們'} links={['品牌故事', '媒體聯繫', 'Press kit']}/>
        <FooterContent title={'資訊'} links={['隱私權政策', 'Cookie', 'GDPR']}/>
        <section className="footer-section">
          <h2 className="section-title">追蹤 ALPHA Shop</h2>
          <div className="section-content">
            <div className="tel-info">+886 02123-45678</div>
            <div className="social-icon-group">
              <FacebookIcon className="social-icon cursor-point"/>
              <InstagramIcon className="social-icon cursor-point"/>
              <WhatsappIcon className="social-icon cursor-point"/>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}