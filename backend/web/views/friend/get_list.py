from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from web.model.friend import Friend


class GetListFriendsView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        try:
            item_count = int(request.query_params.get('item_count',0))
            friend_raw = Friend.objects.filter(
                me__user=request.user,
            ).order_by('-update_time')[item_count:item_count+20]
            friends = []
            for friend in friend_raw:
                character = friend.character
                author = character.author
                friends.append({
                    'id': friend.id,
                    'character': {
                        'id': character.id,
                        'name': character.name,
                        'profile': character.profile,
                        'photo': character.photo.url,
                        'background_image': character.background_image.url,
                        'author': {
                            'user_id': author.id,
                            'username': author.user.username,
                            'photo': author.photo.url,
                        }
                    }
                })
            return Response({
                'result': 'success',
                'friends': friends,
            })

        except:
            return Response({
                'result': '系统异常，请稍后尝试',
            })