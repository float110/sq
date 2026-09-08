from django.contrib import admin

from web.model.user import UserProfile
from web.model.character import Character

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    raw_id_fields = ("user",)

@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    raw_id_fields = ('author',)