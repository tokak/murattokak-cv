const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Murat Tokak. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
