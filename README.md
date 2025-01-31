## MediCate - Emergency Healthcare Management System
MediCate is a comprehensive healthcare management system that streamlines emergency services, hospital bed management, and ambulance coordination.

### **Features**
- **Emergency Services**
  - Real-time emergency case management
  - Quick access to nearby hospitals
  - Instant hospital capacity information
  - Emergency contact coordination
- **Bed Management**
  - Live bed availability tracking
  - Automated bed allocation system
  - Patient transfer management
  - Real-time updates on bed status
- **Ambulance Services**
  - GPS-based ambulance tracking
  - Smart route optimization
  - Real-time driver coordination
  - Fare estimation based on distance

### **Tech Stack**
- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - Frontend library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Maps API](https://developers.google.com/maps) - Location and routing services
- [React Icons](https://react-icons.github.io/react-icons/) - Icon components

### **Project Structure**
```bash
medicate/
├── src/
│   └── app/
│       ├── about/           
│       │   └── page.js
│       ├── ambulance/          
│       │   ├── page.js
│       │   └── components/
│       ├── beds/              
│       │   ├── page.js
│       │   └── components/
│       ├── emergency/         
│       │   ├── page.js
│       │   └── components/
│       ├── components/        
│       │   ├── Header.js
│       │   ├── Footer.js
│       │   └── Layout.js
│       ├── lib/              
│       │   └── api.js
│       ├── styles/           
│       │   └── globals.css
│       ├── layout.js        
│       └── page.js          
├── public/                  
│   ├── images/
│   └── icons/
├── .env.local              
├── package.json
└── README.md
```

### **Getting Started**
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/medicate.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables: Create a .env.local file with your Google Maps API key:
    ```md
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```
5. Open http://localhost:3000 in your browser

### **Key Components**
- **Emergency Dashboard:** Quick access to emergency services and nearby hospitals
- **Bed Management System:** Real-time bed availability tracking and booking
- **Ambulance Booking:** Location-based ambulance services with route optimization
- **Hospital Interface:** Dashboard for hospital staff to manage resources

### **Acknowledgments**
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Google Maps Platform](https://developers.google.com/maps/documentation)

<div align="center">
    <h3>Developed by The Outbreakers</h3>
</div>

