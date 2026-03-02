import { Package, Video, ClipboardList, LayoutDashboard, LogOut, Info } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const items = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Produtos", url: "/admin/produtos", icon: Package },
  { title: "Vídeos", url: "/admin/videos", icon: Video },
  { title: "Consultas", url: "/admin/consultas", icon: ClipboardList },
  { title: "Página Sobre", url: "/admin/sobre", icon: Info },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { signOut, user } = useAuth();

  return (
    <Sidebar collapsible="icon" className="border-r border-primary/20">
      <SidebarContent className="bg-primary/5">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-bold text-base px-4 py-3">
            {!collapsed && "🏥 QUICEP Admin"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/admin"}
                      className="hover:bg-primary/10 px-3 py-2 rounded-md"
                      activeClassName="bg-primary text-primary-foreground font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-primary/5 p-3 border-t border-primary/20">
        {!collapsed && (
          <p className="text-xs text-muted-foreground truncate mb-2">{user?.email}</p>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start text-destructive hover:bg-destructive/10"
          onClick={signOut}
        >
          <LogOut className="h-4 w-4 mr-2" />
          {!collapsed && "Sair"}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
