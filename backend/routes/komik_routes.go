package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func RegisterKomikRoutes(r *gin.Engine) {
	komik := r.Group("/komik")
	{
		// Mendukung rute dengan trailing slash
		komik.GET("/", controllers.GetKomik)
		komik.POST("/", controllers.CreateKomik)
		komik.GET("/:id", controllers.GetKomikByID)
		komik.PUT("/:id", controllers.UpdateKomik)
		komik.DELETE("/:id", controllers.DeleteKomik)

		// Mendukung rute tanpa trailing slash
		komik.GET("", controllers.GetKomik)
		komik.POST("", controllers.CreateKomik)
	}
}
