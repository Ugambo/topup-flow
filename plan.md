# VTU App - Phase 1: Core UI Components

The goal is to establish the base layout and core UI components for the Virtual Top-Up (VTU) application.

## 1. Directory Structure
- `src/components/layout`: For Header and Footer.
- `src/components/vtu`: For VTU-specific components (Services, Recharge Forms).
- `src/components/ui`: Existing Shadcn UI components.

## 2. Components to Implement
### Layout Components
- `Header.tsx`: Responsive navigation bar with logo, links (Home, Dashboard, Services), and a login/signup button.
- `Footer.tsx`: Simple footer with copyright and links.

### VTU Specific Components
- `ServiceCard.tsx`: A card showing a service (e.g., "Airtime", "Data Bundle") with an icon and description.
- `RechargeForm.tsx`: A form to enter phone number, select network/service, and amount.

### App Shell
- `App.tsx`: Integrate the Header, a hero section, featured services (using ServiceCards), and the Footer.

## 3. Styling & UX
- Use Tailwind CSS for a clean, modern interface.
- Primary color: Indigo or Blue (trustworthy colors for financial apps).
- Mobile-first responsive design.
- Lucide-react icons for visual clarity.

## 4. Technical Details
- React 19 + Vite.
- Shadcn UI (Card, Button, Input, Select, Form).
- Lucide React for icons.
- Sonner for notifications (already present in `src/components/ui/sonner.tsx`).
