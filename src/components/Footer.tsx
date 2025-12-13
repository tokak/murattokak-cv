const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Murat Tokak. Tüm hakları saklıdır.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          {'</>'}  with passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
