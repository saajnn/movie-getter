package router

import (
	mm "movie/manager"
	"movie/proxy"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

func Router(r *gin.Engine, manager *mm.Manager) {
	r.GET("/user/stop/:name", func(c *gin.Context) {
		name := c.Param("name")
		if name == "all" {
			manager.GetStop()
		} else {
			manager.GetStopByAlias(name)
		}

		c.String(http.StatusOK, "stop")
	})
	r.GET("/user/start/:name", func(c *gin.Context) {
		name := c.Param("name")
		if name == "all" {
			manager.GetStart()
		} else {
			manager.GetStartByAlias(name)
		}

		c.String(http.StatusOK, "start")
	})
	r.GET("/user/exit", func(ctx *gin.Context) {
		manager.GetStop()
		go func() {
			time.Sleep(3 * time.Second)
			manager.Close()
			os.Exit(0)
		}()
	})
	r.POST("/search", func(c *gin.Context) {
		keywords := c.PostForm("keywords")
		c.JSON(http.StatusOK, manager.Search(keywords))
	})
	r.GET("/play/:belong/:id", func(c *gin.Context) {
		belong := c.Param("belong")
		idV := c.Param("id")
		id, err := strconv.Atoi(idV)
		if err != nil {
			c.String(http.StatusBadRequest, "wrong id")
		}
		c.JSON(http.StatusOK, manager.GetContent(belong, id))
	})

	r.POST("/user/source/add", func(c *gin.Context) {
		name := c.PostForm("name")
		url := c.PostForm("url")
		manager.AddSource(name, url)
		c.Status(http.StatusOK)
	})

	r.POST("/user/source/del", func(c *gin.Context) {
		url := c.PostForm("url")
		err := manager.DelSource(url)
		if err != nil {
			c.String(http.StatusInternalServerError, "err")
			return
		}
		c.Status(http.StatusOK)
	})

	r.POST("/user/source/updateName", func(c *gin.Context) {
		// 这里没写完
		oldName := c.PostForm("oldName")
		newName := c.PostForm("newName")
		err := manager.UpdateSourceName(oldName, newName)
		if err != nil {
			c.String(http.StatusInternalServerError, "err")
			return
		}
		c.Status(http.StatusOK)
	})

	r.POST("/movie/:category", func(c *gin.Context) {
		category := c.Param("category")
		numV := c.PostForm("num")
		var num int
		if numV == "" {
			num = 20
		} else {
			var err error
			num, err = strconv.Atoi(numV)
			if err != nil {
				c.String(http.StatusBadRequest, "wrong num")
				return
			}
		}
		var movies []mm.Movie = []mm.Movie{}
		movies = manager.GetContentByCategory(category, num)
		c.JSON(http.StatusOK, movies)
	})

	r.GET("/img/proxy", proxy.Proxy)

	r.GET("/user/source/all", func(c *gin.Context) {
		c.JSON(http.StatusOK, manager.GetSource())
	})

}
