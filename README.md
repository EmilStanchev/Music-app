# Информация:
Приложението има за цел да помага на потребителите да намират лириките на любимите си песни.  За да използват всички функции на приложението, потребителите трябва да се регистрират. В приложението са използвани основните CRUD операции.
# Стартиране
За да пуснете приложението, следвайте стъпките:
  *	В терминала пишете следната команда: npm run start 
  *	Изчаквате докато изпише, че приложението се е свързало с базата данни.
 
 # Технологии: 
Node.js, Express.js, HTML, CSS, JS
# Конфигурация:
Folders:
  *	В папката public се намират всички файлове, които отговарят за по- добрата визия на сайта( css- файлове). Също така има две папки за снимки. В едната папка са снимките, които съм използвал за сайта. Във  другата папка се записват всички профилни снимки на потребителите.
  * В папката routes се намират всички get и post заявки. 
  * В папката views се намират всички view- та. 

Controllers:
  *	auth.js , login-controller.js, adminLogin.js – отговорят за регистрацията и за влизането в сайта на потребителите и админите.
  *	addSongToDb.js – тук се намира логиката за добавяне на песни в базата данни. Само потребителите с роля admin могат да добавят песни.
  *	allAdmins.js, allUsers.js – тези два контролера позволяват на админите да проверяват информацията за потребителите и админите. 
  *	 search.js – тук е логиката за търсене на песни по име от потребителите. 
  *	profile.js, image-upload.js – тези контролери отговаря за промяната на информацията на потребителите. Всяка промяна, която направят по профила си се променя в базата данни. 
  *	 checkAdminLog.js checkLog.js – проверяват дали админа/ потребителя се е логнал. Ако не е не дават достъп на потребителите до страниците, които са за потребители/ админи на сайта.
  *	contactForm.js – този контролер отговаря за обратната връзка. Чрез него потребителите могат да докладват проблеми или просто да споделят мнението си за сайта. 
