from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, email, password = None, **extra_fields):
        if not email: 
            raise ValueError("l'e-mail est requis!!")
        
        if password is None: 
            raise ValueError("le mot de passe est obligatoire")
            
        email = self.normalize_email(email)
        user = self.model(email = email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        
        return user
        
    def create_superuser(self, email, password = None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("le superuser user doi etre definit avec 'is_superuser' = True")
        
        if extra_fields.get("is_staff") is not True:
            raise ValueError("le superuser user doi etre definit avec 'is_staff' = True")
        
        return self.create_user(email, password, **extra_fields)