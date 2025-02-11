import React from "react";
import { DragTextProvider } from "../Order/Context/DragTextContext";
import { CarouselFrontBackProvider } from "../Order/Context/CarouselFrontBackContext";
import { OrderDataProvider } from "../Order/Context/OrderDataContext";
import { ThemeProvider } from "../Context/Theme";
import { ClubsImageProvider } from "../Context/ClubsImageContext";
import { BackFoodballTextProvider } from "../Order/Context/BackFoodballTextContext";
import { Provider } from "react-redux";
import { apiStore } from "../store/apiStore";
import { ScrollProvider } from "../pages/Home/contexts/ScrollContext";
import { LanguageProvider } from "../pages/Home/contexts/Language";
import { AuthProvider } from "../Context/AuthContext";

const CombinedProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <DragTextProvider>
      <CarouselFrontBackProvider>
        <OrderDataProvider>
          <ClubsImageProvider>
            <ThemeProvider>
              <BackFoodballTextProvider>
                <ScrollProvider>
                  <LanguageProvider>
                    <AuthProvider>
                      {children}
                    </AuthProvider>
                  </LanguageProvider>
                </ScrollProvider>
              </BackFoodballTextProvider>
            </ThemeProvider>
          </ClubsImageProvider>
        </OrderDataProvider>
      </CarouselFrontBackProvider>
    </DragTextProvider>
  );
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={apiStore}>
      <CombinedProviders>{children}</CombinedProviders>
    </Provider>
  );
};
