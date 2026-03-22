import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useLocation,
} from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Fragment } from "react/jsx-runtime";
import { getAuthenticatedUser } from "@/hooks/use-auth";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async () => {
    const user = await getAuthenticatedUser();
    if (!user) throw redirect({ to: "/login" });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {paths.map((path, index) => {
                  const lastPath = index + 1 === paths.length;
                  const href = "/" + paths.slice(0, index + 1).join("/");

                  return (
                    <Fragment key={path + index}>
                      <BreadcrumbItem>
                        {lastPath ? (
                          <BreadcrumbPage className="capitalize font-bold">
                            {path}
                          </BreadcrumbPage>
                        ) : (
                          <Link
                            to={href as "/dashboard"}
                            className="capitalize text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {path}
                          </Link>
                        )}
                      </BreadcrumbItem>
                      {!lastPath && (
                        <BreadcrumbSeparator className="hidden md:block" />
                      )}
                    </Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}