from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver

from posts.models import TaggedPost

@receiver(post_save, sender=TaggedPost)
def tag_increment(sender, **kwargs):
    update_using_tag(kwargs['instance'])

@receiver(pre_delete, sender=TaggedPost)
def tag_decrement(sender, **kwargs):
    update_using_tag(kwargs['instance'], increment=False)

def update_using_tag(ship, increment=True):
    tag = ship.tag
    if increment:
        tag.using += 1
    else:
        tag.using = tag.using - 1 if tag.using > 0 else 0
    tag.save()
