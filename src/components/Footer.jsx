

const Footer = () => {

const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-[6rem] border-t-gray-500 border-2 pt-4">
      <p className="text-white text-center">Copyrights  &copy;{currentYear} Perpetual. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer